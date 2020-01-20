# New Front Door template starter project

This template starter package has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and so provides a lot of developer benefits out of the box.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

For a full list of recommended resources for New Front Door development, [check out this repository](https://github.com/Vision100IT/NFD-training).

## First steps for using this project
- Ensure you've completed [all Dev Environment setup steps](https://github.com/Vision100IT/NFD-training) in the [training repo](https://github.com/Vision100IT/NFD-training).
- Clone this repository to your computer
- Edit package.json name field to the name of your theme
- Create a new github repository (feel free to ask how on Slack!) and commit your newly cloned files into the new repo you just created
- To check all is well, run `yarn start` to see the project in your browser at [http://localhost:3000](http://localhost:3000)
- Create a branch and start customizing!

## Theme methodology

New Front Door themes are designed with an emphasis on giving our clients the most possible control over their content, while we assist with the layout and style.

What this means is that ultimately the theme won't have much if any body text, rather all of this will be brought into the theme from the client's CMS. We use React's JSX syntax to render `{page.title}` (or similar) which has been provided by the API. To learn more about JSX, [click here](https://reactjs.org/docs/introducing-jsx.html)

Similarly with things that are client choice (like font, colour, images) we want to abstract into an easily editable 'theme' declaration. Some things (like images) will likely be at the page level, other things (like font and colour) will be at the site level. For these sitewide values, we have a 'theme.js' file which captures all of these values and provides keys for accessing them within the theme files. If you find yourself hardcoding a colour, a font, or even padding or margin on a text element, it likely needs to be abstracted to the theme.js file.

### Key theme principles
There are some key principles that we want to have in place to make a theme easy to work with:
- Style elements ought to utilise values provided by the 'theme.js' file for consistency and ease of updating new values everywhere they exist. The project [theme-ui](https://theme-ui.com/) provides this functionality, and [offers some components and primitives](https://theme-ui.com/components) to assist with your design. It is preferable to use these components over the regular `<p>` and `<div>` (etc.) tags, as the logic to access the theme values is built into the components. It's a bit of a learning curve, but ultimately makes things a lot faster to develop if learned up front.
- Use the [NewFrontDoor UI library](https://github.com/Vision100IT/ui) as much as is practical for the theme. These are some larger and more complex components that either provide consistent features across all our sites, or ensure we're not re-creating similar layout components for every theme. Where you develop a theme element that ought be in the UI library, feel free to make a pull request! UI library is built with theme-ui inside, so ought to obey your theme.js properties.
- Layout/Structure should to be done in a way that carries consistently through to smaller screens such as tablet and mobile, rather than having a different theme for mobile. This may mean some compromises to the design.
- Aim to have a limited number of theme template pages, with options to adjust the layout within the page logic, rather than many distinct page files. Most themes will only need Home, Page, Sermon Page and Sermon Series Page files. Starters for these pages have been provided for you in the routes folder.

## Development considerations

### Examples and guides
Developing a theme in a new language or new context can be a bit intimidating. A number of New Front Door projects can serve as good examples of how to go about meeting the principles above. Check out the following code bases for some inspiration:
- [Soul Church Repo](https://github.com/Vision100IT/soul-nextjs)
- [One Way Margate](https://github.com/Vision100IT/new.onewaymargate.org)
- [Summerleas Template](https://github.com/Vision100IT/summerleas-template)

If you need a bit more direction in building out using React, check out our [training repo](https://github.com/Vision100IT/NFD-training) or feel free to get in touch via Slack. If you think the training repo doesn't cover something you need, raise an issue and we'll add some helpful resources in that area.

### Data, api and routing stuff
To begin with, feel free to use a JSON file to hold your sample data. An example/sample file has been provided. Feel free to use what is already in there, and as your needs change, extend it out for the features you're developing. We are largely transitioning to use Sanity.io as our API and CMS for client sites, and once your project is sufficiently developed we can hook it up to our Dev Sanity account to test with live data fetching.

To manage routing in your theme development, React Router has been added to enable page navigation and route-based data fetching. You may need to make some changes to the router; if so, check out the docs listed in the [training repo](https://github.com/Vision100IT/NFD-training). Hopefully this will serve your needs, but there's always slack to ask for help.

## Tooling
Because New Front Door has a number of team members, we like to work using the same tools and code style as much as possible. To this end, we've included a number of Dev packages and configurations in this project to help.

### Linting
XO, eslint and prettier are some of the most important tools for code consistency. Running the XO command 'Fix all auto-fixable problems' in your code editor will help clean up your code, and ensure the code conforms to our preferred style. Some things won't be auto-fixable, and so a red line will remain. Eslint gives clues on how to resolve the code problem, and 99% of the time, ought to be followed. Feel free to ask on Slack if you have any issues with linting.

### Prop-types
Prop-types help with debugging at run time, as it checks what values are being provided to each component, and throws an error when the value doesn't match the prop-type pattern. This can especially help when our external APIs are not providing what we expected, or there's an error fetching data.
Eslint will let you know when prop-types haven't been provided for a component, so you can ensure they're added.

## Code review and final steps

### Code review
It's the hope that all of our team members will be able to assist with code review and provide feedback. It's the way we're best going to improve as developers. So if a rewrite is suggested or your method is questioned, don't worry!

Ultimately all code should be reviewed before put into production. Feel free to tag @BarryThePenguin or @instagibb to take a look over your project.

### Building the theme for production use
Ultimately all our themes need to be transitioned to use NextJS before they can be put into production, as NextJS gives us the tools we need to ensure that our sites function as expected out in the big bad world with Social Media previews and Search Engine crawling capability.

This means that the theme as it exists will need to be restructured, and a new routing method implemented. You won't need to worry about that for now, but is something that will happen down the track. It is possible that some small compromises might be necessary at this stage to ensure we can provide the right product to our client churches.