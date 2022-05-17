<h1 style='font-size:calc(1.7rem + 1.4vw);'>Zesty is live at <a href="https://zesty.cooking" style="color:#1e8b1e;">zesty.cooking</a></h1>
<p>
    Zesty is a web application made in PHP Laravel for people to share cooking recipes. 
    To post a recipe, users are required to create an account. 
    When posting a recipe, users enter information about their recipe such as the title, number of servings, a description, an image, list of ingredients, and the instructions. 
    People looking for recipes can browse the front page, where the latest recipes are listed, or search Zesty for recipes that contain a certain word or phrase in their title, description or ingredients.
</p>

<h2 style='font-size:calc(1.4rem + 1.3vw);'>Features</h2>
<p>
   Here is a list of some of the features Zesty has to offer. Click the headings to see a video of the feature in use.
</p>

<h3 style='font-size:calc(0.7rem + 1vw);'><a href='https://zesty.cooking/demos/browse.mp4' style="color:#1e8b1e;">Browsing Zesty</a></h3>
<p>
    Zesty's front page is populated with the images and titles of the latest recipes uploaded by the users. 
    When users select a recipe, they will see the recipes' title, number of servings, creator, description, image, list of ingredients and the instructions.
    If they would like to see more recipes from the creator, there is a link which will take them to their profile.
</p>

<h3 style='font-size:calc(0.7rem + 1vw);'><a href='https://zesty.cooking/demos/search.mp4' style="color:#1e8b1e;">Searching Zesty</a></h3>
<p>
    There is a search bar fixed to the top of the screen which allows users to search recipes. 
    Zesty will use an SQL LIKE query to search for recipes where the title, description, ingredients or instructions contain
    the search query. The results will be displayed on a search results page for the user to browse through.
</p>

<h3 style='font-size:calc(0.7rem + 1vw);'><a href='https://zesty.cooking/demos/auth.mp4' style="color:#1e8b1e;">Login and Registration</a></h3>
<p>
    In order to post a recipe, users must create an account. 
    To create an account users must enter their name, a username, a valid email address, and a password.
    After creating an account, Zesty will send the user an email to notify them that the account has been created
    and they will have the ability to post recipes to Zesty. 
    When logging into an existing account, users will need to provide the email address and password for the account,
    they will also have a 'remember me' option which will keep them logged in even if they exit the website.
    If a user were to forget their password, they can provide the email used to create the account and Zesty will send an email with a link which will allow them to reset their password.
</p>

<h3 style='font-size:calc(0.7rem + 1vw);'><a href='https://zesty.cooking/demos/post-recipe.mp4' style="color:#1e8b1e;">Posting Recipes</a></h3>
<p>
    When users want to post a recipe, they will be given a form. 
    The form will contain fields for various attributes about the recipe, though not all of them are required.
    The only fields which are required are the title and the list of ingredients, everything else is optional.
    Users will be given a textbox to enter an ingredient and an 'add' button to add the ingredient to the list of all ingredients.
    After adding the ingredient, it will appear in a list of all the entered ingredients, if there is an error with an ingredient, they can click the X button and remove the error.
</p>

<h3 style='font-size:calc(0.7rem + 1vw);'><a href='https://zesty.cooking/demos/dashboard.mp4' style="color:#1e8b1e;">Dashboard</a></h3>
<p>
    If a user wants to customize the appearance of their account, they can do so on the dashboard.
    Upon entering the dashboard, they will see their user information just like they would with any other user, but will see an 'edit profile' button. 
    Clicking the 'edit profile' button will prompt the user with a form where they can change their avatar, name, or their bio.
</p>
