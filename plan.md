# Translation Implementation Plan

## Overview
This document outlines the plan for implementing a new Polish translation and updating the existing Italian and Spanish translations in the Nothing to Hide application.

## Current State Analysis

### Existing Structure
- Translations are organized in `src/translations/[lang_code]/` with 4 files per language:
  - `[LANG].ts` - Main export file (e.g., `IT.ts`)
  - `General.ts` - Common UI strings, settings, legal info
  - `CommonGame.ts` - Game-specific UI strings
  - `Scenes.ts` - All game scene content (5 scenes)

### New Translations Directory
- Files in `new_translations/` have `.json` extension but are actually TypeScript files
- They contain only scene content (scene1-scene5) with incorrect import paths
- They need to be converted to the proper structure

### Scene Mapping
- `scene1` → `socialMedia`
- `scene2` → `cookie`
- `scene3` → `phishing`
- `scene4` → `photos`
- `scene5` → `password`

## Implementation Tasks

### Phase 1: Add Polish Translation (NEW LANGUAGE)

#### Task 1.1: Create Polish Translation Files
- Create directory: `src/translations/pl/`
- Create `PL.ts` (main export file)
- Create `General.ts` (based on Italian/English templates)
- Create `CommonGame.ts` (based on Italian/English templates)
- Create `Scenes.ts` (convert from `new_translations/NtH-Polish.json`)

#### Task 1.2: Update Translation Index
- Edit `src/translations/index.ts`:
  - Add import: `import { PL } from "./pl/PL";`
  - Add to translations object: `PL,`

#### Task 1.3: Update Languages Configuration
- Edit `src/constants/Languages.ts`:
  - Add to LANGUAGES object:
    ```typescript
    PL: {
      code: "PL",
      name: "Polski",
      svg: COUNTRIES_SVG.PL
    },
    ```

### Phase 2: Update Spanish Translation

#### Task 2.1: Update Spanish Scenes.ts
- Replace `src/translations/es/Scenes.ts` with content from `new_translations/NtH-Spanish.json`
- Convert from scene1-scene5 format to socialMedia, cookie, phishing, photos, password format
- Fix import paths to use `"../../types/translations/Scenes"`

**Note:** General.ts and CommonGame.ts for Spanish already exist and don't need updates from new_translations (they contain only scene data)

### Phase 3: Update Italian Translation

#### Task 3.1: Update Italian Scenes.ts
- Replace `src/translations/it/Scenes.ts` with content from `new_translations/NtH-Italian.json`
- Convert from scene1-scene5 format to socialMedia, cookie, phishing, photos, password format
- Fix import paths to use `"../../types/translations/Scenes"`

**Note:** General.ts and CommonGame.ts for Italian already exist and don't need updates

### Phase 4: Validation & Testing

#### Task 4.1: TypeScript Compilation Check
- Run `npm run build` to ensure no TypeScript errors
- Fix any import path issues

#### Task 4.2: Import Path Verification
- Ensure all new_translations files have correct import paths
- Current files have incorrect paths like `../../Typy/Překlady/Scény` (Czech) which need to be `../../types/translations/Scenes`

#### Task 4.3: Application Testing
- Test that all languages appear in the language selector
- Verify that Polish language loads correctly
- Verify that updated Spanish and Italian translations display properly

## Priority & Dependencies

| Task | Priority | Depends On | Estimated Time |
|------|----------|------------|----------------|
| 1.1 Polish files | HIGH | None | 30 min |
| 1.2 Update index.ts | HIGH | 1.1 | 5 min |
| 1.3 Update Languages.ts | HIGH | 1.1 | 5 min |
| 2.1 Update Spanish | HIGH | None | 15 min |
| 3.1 Update Italian | HIGH | None | 15 min |
| 4.1 Build check | MEDIUM | 1.1-3.1 | 10 min |
| 4.2 Testing | MEDIUM | 4.1 | 20 min |

**Total Estimated Time: ~1.5-2 hours**

## Specific Conversion Requirements

### For new_translations files, the conversion process is:

1. **Fix Import Statement:**
   ```typescript
   // FROM:
   import { Scene1Translation, Scene2Translation, ... } from "../../types/translations/Scenes";

   // TO:
   import { SocialMediaTranslation, CookieTranslation, PhishingTranslation, PhotosTranslation, PasswordTranslation } from "../../types/translations/Scenes";
   ```

2. **Convert Scene Variables:**
   ```typescript
   // FROM:
   const scene1: Scene1Translation = { ... };
   const scene2: Scene2Translation = { ... };
   export const scenes = { scene1, scene2, scene3, scene4, scene5 };

   // TO:
   const socialMedia: SocialMediaTranslation = { ... }; // scene1 content
   const cookie: CookieTranslation = { ... }; // scene2 content
   const phishing: PhishingTranslation = { ... }; // scene3 content
   const photos: PhotosTranslation = { ... }; // scene4 content
   const password: PasswordTranslation = { ... }; // scene5 content
   export const scenes = { socialMedia, cookie, phishing, photos, password };
   ```

3. **For Polish General.ts and CommonGame.ts:**
   - Need to be created based on English/Italian templates
   - Can copy from existing translations and translate to Polish

## Files to Modify/Create

### Files to CREATE:
- `src/translations/pl/PL.ts`
- `src/translations/pl/General.ts`
- `src/translations/pl/CommonGame.ts`
- `src/translations/pl/Scenes.ts`

### Files to MODIFY:
- `src/translations/index.ts`
- `src/constants/Languages.ts`
- `src/translations/it/Scenes.ts` (replace content)
- `src/translations/es/Scenes.ts` (replace content)

## Recommended Implementation Order

1. **First:** Create Polish translation files (PL.ts, General.ts, CommonGame.ts, Scenes.ts)
2. **Second:** Update translations index.ts and Languages.ts for Polish
3. **Third:** Update Italian Scenes.ts
4. **Fourth:** Update Spanish Scenes.ts
5. **Fifth:** Build and test