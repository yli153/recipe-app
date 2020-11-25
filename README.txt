    My react app displays a list of 15 quarantine baking recipes and allows users to add and remove recipes from 
their favorite section. In total, there are 3 functional filtering categories based on the diet, type and flavor 
of the dessert, as well as 3 sorting features based on prep time, cook time and number of servings. In the favorite 
section, the total prep time, total cook time and total time (prep + cook) of the favorite recipes are calculated. 

1) Organization of components
    My react app has a total of 6 components, with the main component being App.js and 5 sub-components which are 
TopBar.js, FilteredList.js, DisplayList.js, PastryCard.js and FavoriteSection.js. The components are organized such 
that App calls FilteredList and FavoriteSection; FilteredList calls TopBar and DisplayList; and DisplayList calls PastryCard. 
    
    App.js holds the data for both the original recipe list and the favorite recipe list as states and renders all the 
sub-components by directly calling FilteredList and FavoriteSection. It also contains the addFavorite and removeFavorite
functions which update the favorite recipe list accordingly to user action. FilteredList takes care of all the filtering and sorting 
functionalities and renders two other sub-components: TopBar and DisplayList. TopBar creates the navigation bar where users will 
be able to select different filtering categories and sorting features whereas DisplayList calls the sub-component PastryCard to 
create individual pastry cards with a button either to "Add to favorite" or "Unfavorite" and formulate a card deck. Lastly, 
the sub-component FavoriteSection handles the addition and removal of recipes from the favorite and calculates the total prep 
time, total cook time and total time (prep + cook) of the favorite recipes.


2) How data is passed down through components
    App.js contains both the original recipe list and the favorite recipe list, and the addFavorite and removeFavorite functions. 
App passes down both lists and both functions to FilteredList, while passing down only the favorite recipe list and removeFavorite 
function to FavoriteSection.

    FilteredList inherits both the original and favorite recipe lists as well as the addFavorite and removeFavorite functions from 
App.js. It holds the three filtering criteria (i.e., diet, type and flavor) and the sorting feature (i.e., sortCriteria) as states. 
FilteredList also contains the functions that set the states and handle filtering and sorting functionalities when the user triggers 
them in the navigation bar. These functions include onSelectDiet, onSelectType, onSelectFlavor, onSelectSort, matchesFilterDiet, 
matchesFilterType, matchesFilterFlavor and sortlist. 

    FilteredList passes down onSelectDiet, onSelectType, onSelectFlavor, onSelectSort and the state sortCriteria to TopBar. In 
additition, it calls the filter function three times with matchesFilterDiet, matchesFilterType and matchesFilter, and the sort function 
once with sortList on the original recipe list inherited from App. It then passes down the post-filtered, post-sorted recipe list, 
the favorite recipe list, and the addFavorite and removeFavorite functions (also inherited from App) to DisplayList.

    DisplayList passes down all the props inherited from FiltedList to PastryCard. By using a map function, a card is created for each 
recipe in the list with a button to trigger either the addFavorite or removeFavorite function on click depending whether the current 
recipe has been added to favorite or not. DisplayList then takes all of the individual pastry card and creates a card deck.

    On the other hand, the FavoriteSection inherits the favorite recipe list and removeFavorite function from App. It contains 
two functions: createFavoriteItem which creates a card for every favorite recipe and convertTime which takes care of converting 
time from minutes to the format of "X hr Y mins" for users' convenience. In addition, each card for the favorite recipe contains
an "Unfavorite" button which triggers the removeFavorite function on click.


3) How the user trigger state changes
    There are four ways that the user can trigger state changes in my app: filtering the recipe list, sorting the recipe list, adding 
a recipe to the favorite section and removing a recipe from the favorite section. The only two components in my app that hold states
are FilteredList and App. 
    
    FilteredList has four states which hold the values for the filtering categories (i.e., diet, type and flavor) and sorting criteria. 
All three filtering categories are set to "All" as default and the sorting criteria is set to "Select" as default. When the user filters 
the recipe list through selecting one of the filtering criteria in the navigation bar, the selected nav link with its associated event 
key and onSelect function (i.e., onSelectDiet, onSelectType or onSelectFlavor) will be triggered. The diet, type or flavor state in 
FilteredList will then be updated to the corresponding event key. Similarly, when the user wants to sort the recipe list and selects 
one of the sorting criteria (i.e., prep time in ascending or descending order, cook time in ascending or descending order, or number of 
servings in ascending or descending order), the selected dropdown item in the nav bar with the associated event key and onSelectSort 
function will be triggered. The sortCriteria state in FilteredList will then be updated to the event key triggered. 

    App has two states, one for the original recipe list with 15 recipes (i.e., recipeList) and the other for the favorite recipe list
(i.e., favoriteList). The original recipe list remains unchanged throughout while the favorite recipe list gets updated. When each 
individual pastryCard gets created, it will check whether the current recipe has already been added to the favorite recipe list and 
create either the "Add to Favorite" or the "Unfavorite" button respectively. The addFavorite or removeFavorite function will be triggered 
on click by the user. The addFavorite function will take in the id of the newly added recipe, makes a new favoriteList with the newly 
added recipe and sets the state to the new favoriteList. In contrast, the removeFavorite function will take in the id of the recipe to 
be removed, makes a new favoriteList with the selected recipe removed using the filter function and sets the state to the new favoriteList.
The "Unfavorite" button is available to the users in the pastry cards both in the recipe section and the favorite section. Hence, the state 
favoriteList essentially gets updated by the addFavorite and removeFavorite functions. 
