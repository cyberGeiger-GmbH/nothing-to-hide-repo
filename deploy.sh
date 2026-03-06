#!/bin/bash

# Deploy script for nothing-to-hide project
# Builds the app and deploys to the remote server via SSH
#
# Usage:
#   ./deploy.sh prod         - Deploy to production (creates backup)
#   ./deploy.sh list         - List all backups on remote server
#   ./deploy.sh clean        - Delete all backups on remote server
#   ./deploy.sh clean N      - Delete backups older than N days (e.g., ./deploy.sh clean 7)

set -e  # Exit on any error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Load environment variables from .env.deploy
ENV_FILE=".env.deploy"
if [ ! -f "$ENV_FILE" ]; then
    echo -e "${RED}Error: $ENV_FILE not found!${NC}"
    exit 1
fi

export $(grep -v '^#' "$ENV_FILE" | xargs)

# Validate required variables
if [ -z "$SSH_HOST" ] || [ -z "$SSH_USER" ]; then
    echo -e "${RED}Error: SSH_HOST and SSH_USER must be set in $ENV_FILE${NC}"
    exit 1
fi

# Configuration
REMOTE_PATH="~/htdocs/nothing-to-hide"
BACKUP_PATH="${REMOTE_PATH}/backups"

# SSH command wrapper
ssh_command() {
    if [ -n "$SSH_PASSWORD" ] && command -v sshpass &> /dev/null; then
        sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no "${SSH_USER}@${SSH_HOST}" "$@"
    else
        ssh -o StrictHostKeyChecking=no "${SSH_USER}@${SSH_HOST}" "$@"
    fi
}


# Main deployment
deploy() {
    LOCAL_DIST="dist"

    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Nothing-to-Hide Deployment Script${NC}"
    echo -e "${GREEN}  Target: PRODUCTION${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""

    # Step 1: Build the project
    echo -e "${YELLOW}[1/4] Building the project...${NC}"
    npm run build
    if [ $? -ne 0 ]; then
        echo -e "${RED}Build failed!${NC}"
        exit 1
    fi
    echo -e "${GREEN}Build completed successfully!${NC}"
    echo ""

    # Step 2: Check if dist folder exists
    if [ ! -d "$LOCAL_DIST" ]; then
        echo -e "${RED}Error: dist folder not found after build!${NC}"
        exit 1
    fi

    # Step 3: Create a temporary backup on the remote server
    echo -e "${YELLOW}[2/4] Creating backup on remote server...${NC}"
    ssh_command "cd $REMOTE_PATH && mkdir -p backups && tar -czf backups/backup_\$(date +%Y%m%d_%H%M%S).tar.gz assets index.html 2>/dev/null || true"
    echo -e "${GREEN}Backup completed (if files existed)${NC}"
    echo ""

    # Step 4: Deploy files to remote server
    echo -e "${YELLOW}[3/4] Deploying files to ${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}...${NC}"

    if [ -n "$SSH_PASSWORD" ] && command -v sshpass &> /dev/null; then
        # Using sshpass with rsync or scp
        if command -v rsync &> /dev/null; then
            sshpass -p "$SSH_PASSWORD" rsync -avz --delete \
                -e "ssh -o StrictHostKeyChecking=no" \
                "$LOCAL_DIST/" "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/"
        else
            # Fallback to scp
            sshpass -p "$SSH_PASSWORD" scp -o StrictHostKeyChecking=no -r \
                "$LOCAL_DIST"/* "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/"
        fi
    else
        # Using SSH keys
        if command -v rsync &> /dev/null; then
            rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
                "$LOCAL_DIST/" "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/"
        else
            # Fallback to scp
            scp -o StrictHostKeyChecking=no -r \
                "$LOCAL_DIST"/* "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}/"
        fi
    fi

    if [ $? -ne 0 ]; then
        echo -e "${RED}Deployment failed!${NC}"
        exit 1
    fi

    echo -e "${GREEN}Files deployed successfully!${NC}"
    echo ""

    # Step 5: Verify deployment
    echo -e "${YELLOW}[4/4] Verifying deployment...${NC}"
    ssh_command "ls -la $REMOTE_PATH | head -10"

    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  Deployment completed successfully!  ${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "Your app is now live at: ${YELLOW}https://${SSH_HOST}/nothing-to-hide/${NC}"
    echo ""
}

# Show usage
show_usage() {
    echo "Usage: ./deploy.sh <command>"
    echo ""
    echo "Commands:"
    echo "  prod        Deploy to production"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh prod           # Deploy to production"
}

# Main script logic
if [ $# -eq 0 ]; then
    show_usage
    exit 1
fi

case "$1" in
    prod)
        deploy
        ;;
    help|--help|-h)
        show_usage
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        echo ""
        show_usage
        exit 1
        ;;
esac