# chat-app

## This repo is a Build of this figma template

[figma file of the chat app](https://www.figma.com/file/0LoDtINsNVMPEFShxO0fIP/Chat-for-desktop%2Fmobile-%7C-Free-to-use-(Community)?type=design&node-id=0-1&mode=design)

The tasks are divided as follows:

- Please Note just when picking a section to work you are to announce on slack the member number so everyone else takes note
- When making a commit also make sure to indicate the member number along side the details of what changes you've made
- Please note that each member is tasked with making sure their respective section is mobile responsive
- Member1: takes care of the loading screen alongside the side nav
- Member2: takes care of the messages section
- Member3: takes care of the chat section
- Member4: takes would colaborate.......

#### Steps to start working on this project

- fork the repo
- clone the forked repo on your github
- make sure to run `git checkout -b <branch name>` to create your own branch, replace the `<branch name>` with your branch name choice or run `git checkout <branch name>` or `git switch <branch name>` to switch to your branch if you all created the branch
- run `git branch` to see confirm the branch you are on
- `cd` into the cloned run `pnpm install` to install all dependencies on your machine
- run `pnpm run dev` to create a port with vite and load the page on your browser
- remember to update this Readme with what you worked on
- after you are done, stage all changes in your branch and push to github.
- make a pull request for your changes to be merged

Let's go 🚀

## Progress status...

### Member 1 (Stanley Azi) update

- The project has been initiated with HTML, Tailwindcss, Vanilla Js and of course, you can write plain css on the style.css if you prefer plain css
- Layout of the project has been mapped out; do well to read the comment on index.html main section for the guides to the tasks of the remaining Members
- Header navs done and it is responsive
- See package.json to check all dependencies
- I used bling js in my little js code; you can ignore and use plain JS if you prefer that
- images and Icons are saved in assets folder, you can use icons and images from there or add more if you need to.
- License.md was added
- Readme was updated; the next member should do well to document their progress here as wee with their respective heading, (eg. ### Member 1 (Stanley Azi) update)
- I used tailwind css, you can use write plain css in the style folder if you prefer that.

### Member 2 (Chukwuma wisdom Anwaegbu) update

- I Worked on the chat contact section using html and css.
- I also made sure it was responsive.

### Member 3(Majeedat Abdulwahab) update

- I worked on the chat section using HTML and and plain CSS.
- I have also made sure that the chat section is responsive.
- I added new images to the assets folder.
- I have just made a few corrections.
- I made the input field 100%.
- I changed the send message into a button with a type of submit and a cursor: pointer.

### Member 4 (Olaniyi Olufemi)

- I worked on making the input and send message button send the text into the chat box using java, html and css
- i had to comment out the previous html as most of it was more of a place holder text

- BUGS i noticed after git clone

a The search bar seems to be positioned in the wrong place
b The chat section does not have to scroll with the entire page only the contact section should scroll

### Member 1 (Stanley Azi) update 2

#### Bugs fixed

- search bar
- responsiveness
- scroll bar added
- debugged a lot of codes...Almost the entire application
- fixed deployment, meaning you can deploy to vercel or netlify without issues
- mades lots of edits of unused styles
- For now, do not touch responsiveness as it is perfect ATM

#### What I think is left is this stage 1

- On mobile version, the chat box is hidden. It is intended to be opened and cover the entire screen when I new chat is clicked. and it should be able to display the correct chat box for each user message.
- On desktop view, user whose message was opened in the chat box, should be able to have a different color to indicate active among the lists of Messages in section 1
- Kindly update this READ with what you think is left or what you noticed.

#### Notes

- try as much as you can to not repeat styles on media queries, if a style is applied in the global, it should not be repeated in media querries...thus, apply only styles you need to change in the media queries while it inherits other styles from the global which is the parent style
- try to give your classes or ids unique names or make sure to take note of specificity when using CSS. two classes clashed in the two sections (.messages) which the style on one was controlling the other. Fixed tho
- to enhance specificity or avoid clashing of classes, chaining from parent class until the child class can be good, using css nexting would be great. e.g

1
```
.icon-1, .icon-2 {
  width: max-content;
  height: max-content;
  
  & img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: unset;
  }
}
```
2

```
.profile-box .profile-img {
  display: block;
  width: 36px !important;
  height: 36px;
  border-radius: 50%;
}
```
in the above, 1 is applying style to `.icon-1` and `.icon-2` and the same time, this reduces repeating of styles, and also it used css nesting which makes it look clean and easy to debug. 2 used chaining to increase specificity. `.profile-box .profile-img` means style the profile img that is a child/decendant of profile box... this can help in style clashing in a case where two different components have the same class name.

- using relative units like ```em``` and ```rem``` over ```px``` is advisable. Here is a relative unit converter app I built some time ago that can help calculate your px and give you the relative units if you need one: [iConvertUnits](https://iconvertunits.vercel.app/).


### Member 1 (Stanley Azi) update 3

- fixed overflow
- added ability to switch between chat mates and update the chatbox respectively
- added style to active chat

##### what I think is left?

- On mobile version, the chat box is hidden. It is intended to be opened and cover the entire screen when I new chat is clicked. and it should be able to display the correct chat box for each user message.
- ability to store the chats in the local storage with respective user ID and be able to switch chats and see respective chats for each chat mate

Well done to all the members involved in this  project. 🚀👏 

Let's keep updating the README with updates.
