## Environmental requirements

If you're not already set up for React Native, this guide should help you understand the basics:
[React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

## Useful commands

To install dependencies `yarn`

To launch on iOS `yarn ios`
To launch on Android `yarn android`

## Challenge

### Instructions

- Create a clone of this repo
- Change the name and push to your own github
- Complete the challenge
- Let us know you've completed it

### Requirements

- Match mocks delivered by hiring manager for `test-screen` and `test-two-screen`
- Implement navigation handler from list items on `test-screen` to `test-two-screen` and back
- On `test-two-screen`, display the data selected from the list item
- Pull extra data into the model from the API to complete the data display

### Tips

- Look around the codebase for pieces that might help...


# Notes From Moe

## Public Changes

- Substituted basic string routes with an exported Routes Enum; will be more proficient as the "codebase expands" and more routes are created.
- Added 4 new colors to `palette.ts` (cyan, pink, green, and yellow) as they are referenced in multiple files.
- Created references to the statuses of the character so it's easy to change the color associated with a status in the future.
- Made LinearGradient color props a part of `color.ts` to simplify gradient management in the future.
- iOS Home Indicator was conflicting with `<FlatList />` so I adjusted the SafeAreaView to account for more than just the Notch.


## Changes to `test-screen.tsx`

- Attempted to make Linear Gradient the background of the application, but realized Navigation Animation had unwanted results when Screen background is transparent and it was more time-efficient to make the Linear Gradient the topmost component of `test-screen.tsx` and `test-two-screen.tsx` instead of making custom navigation animation.
- Used `useEffect()` over `useFocusEffect()` due to the simple fact that the application doesn't need to request the character list again after refocusing on `test-screen.tsx`. *(API only returns a paginated static list of data)*
- Header Image has a width scale of 80% allowing the image to scale perfectly on different form factors, as pictured at the end of `README.md`.
- Used `<FlatList />` over other methods due to performance benefits of virtualization and the rendering/mounting of only the visible components 
- Made `preset="fixed"` on the `<Screen />` component as there is no need to scroll especially with a `<FlatList />` being incorporated into the screen.
- Exposed `navigation` from props to allow screen to use `navigation.push()` because the push function adds `Routes.CharacterDetails` to the top of the stack to allow multiple instances of `Routes.CharacterDetails` instead of `navigation.navigate()` which will create or go to an already existing instance of `Routes.CharacterDetails`. *(can change if requested by the product manager, I just love spam clicking stuff)*


#### Changes to `<CharacterRowItem />`

- Made the container containing the avatar image have the status indicator border required by the spec. As seen in the file I decided that calling the status color by key from `color.ts` was the most efficient and modular method.
- Used two constants to control the border of the avatar container to maintain linting success and avoid in-line style issues that would have arisen.


## Changes to `test-two-screen.tsx`

- Used `navigation.pop()` over `navigation.navigate()` to remove the topmost route on the stack which would make the most sense when clicking a back button. `navigation.navigate()` use-case would be when clicking a home button but that is not the case here.
- Used `React.useMemo()` to prevent unwanted rerenders of the screen, the screen will only rerender when either `route.params.characterId` or `characters` change.
- Did not use the `API.getUser(id: string)` function because it would create an unnecessary API request to return the same data, instead I referenced the Character by using routing.
- Kept `preset="scroll"` on the `<Screen />` component as there are smaller form factors where fitting information may require scrolling.
- Created static strings for each data point to promote localization in other languages. *(Japanese)*
- Made custom component `<InformationLabel />` to present data points to prevent repetitive code. Very simple and self-explanatory code that can be viewed in `information-label.tsx`

### Changes to MobX Stores
- Added required fields to `CharacterModel` to allow the API to also save `{gender, location, species}` in the store as well.

## Notes

- CharacterStore has weird behavioral issues in the development environment: When the application is first loaded the `RootStoreContext` does not provide the proper value from its Provider. 
- I would have preferred a design file through a service such as Figma only so I could follow the design spec to a tee, but this may have also been done on purpose to test the scrappiness of the candidate. *(I only suggest this to speed up the challenge)* 
- It took me a little under 3.5 hours to perform the requested tasks at hand, as well as document my changes.

## Demo Pictures

### `test-screen.tsx`


### `test-two-screen.tsx`
