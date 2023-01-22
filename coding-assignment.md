# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-08 Let's get Classy` (21/01/2023)

## Build a Food Ordering App - Chapter-08 features

### 1. Create Class Based Component 
  - Created About page as Class-based component.

### 2. Create 2 class based child components
  - Created two class-based child components (Profile & Blog) inside parent (About) Component 

  - Brownie points : Created two more grandchildren components, one with Profile as parent (Social Component) and another with Blog as parent. I created grandchildren components to see how lifecycle methods works for nested components. For `Social Component`, I am not passing any props, whereas for `Repo Component` I am passing state of its parent (Blog) `repo` as props. Repo component shows a repository card for each of the repository in the  `repoList` state variable of Blog.  

### 3. Pass props from Parent to child
  - props `name` is passed from parent to child component 

  About ----->(name as props) ----->   Profile 

  About ----->(name as props) ----->   Blog 
 
  Blog ------> (repo as props where repo is an object of Blog's state variable) -----> Repo
### 4. Create a constructor
  - In All Components, constructor are created. Props are passed to its parent component through super(props) and if any state is needed for a component, it is created in constructor.

### 5. Create a state variable inside child
  - In Profile Component, State variable `userInfo` is created inside `constructor`
  - In Blog Component, State variables `blog` and  `repoList` are created inside `constructor`

### 6. Use this.setState to update it
 
  - In Profile Component - After fetching the data from API, the state of `userInfo` is updated using `this.setState()`
  - In Blog Component - After fetching the data from API, the state of both the states `blog` and `repoList` are updated using `this.setState()`

### 7. What if there are multiple state variables?

-  There are two states for Blog Components - `blog` & `repoList` , updating the state can happen separately in two this.setState() or together in the same this.setState(). I have updated both states together in the same this.setState()

### 8. Write a console.log for each lifecycle method</li>
- In all the components, console.log() statements are written in each lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` along with constructor & render methods.

### 9. Play with the console logs to find out the correct order of their execution.

<ins> Component Hierarchy </ins>

```
About 
  - Profile
    - Social
  - Blog 
    - Repo

```

<ins> Order of their execution for the above nested component hierarchy is as follows : </ins>


About - constructor
About - render 
  Profile - constructor
  Profile - render
    Social - constructor  
    Social - render  
  Blog - costructor 
  Blog - render 

    Social - componentDidMount 
  Profile - componentDidMount
  Blog - componentDidMount
  Profile - render
    Social - render
    Social - componentDidUpdate
  Profile - componentDidUpdate 

  Blog - render 
    (Repo - constructor 
    Repo - render ) - Repeat this for each repository (currently 10 times) (Important to note that Repo component is created only after Blog mounted because it is dependent on state variable of blog which is passed as props but this was not the scenario with Social-Profile relationship because it has no state passed as props)
    
    Repo - componentDidMount - Repeat this for each repository (currently 10 times)
  Blog - componentDidUpdate

About - componentWillUnmount
  Profile - componentWillUnmount
    Social - componentWillUnmount  
  Blog - componentWillUnmount
    Repo - componentWillUnmount (10 times)
  

![Life Cycle](/assets/images/lifecycle.jpg?raw=true)

