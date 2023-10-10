# `01` Hello JSX
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


JSX also allows you to easily include variables into your HTML.

-   Create `name`, `age` variables inside `src/index.js`.
-   Define the variables value as you want, for example:
    ```js
    let age = YOUR AGE, let name = YOUR NAME 
    ```
-   Create another variable `output` to include the values of `age` and `name` into your *HTML* code dynamically, for example:
    ```jsx
    let output = <span> My name is {name} and i am {age} years old. </span>
    ```
    __Note the position of the curly brackets `{` and `}` wrapping the variable.__
-   Render your script code result using `ReactDOM.render`, for example:
    ```jsx
    // use react-dom to render it into the DOM
    import ReactDOM from 'react-dom';
                //render output      //inside the innerHTML of #myDiv
    ReactDOM.render(output,             document.querySelector('#myDiv'));
    ```

The resulting website HTML document will look like this:
```html
<div id="myDiv">
    <span>James is 12 years old</span>
</div>
```

Basically, we are now able to mix HTML and JS in the same file without having to concatenate and use strings. :smiley: Amazing! :angry: right?

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Variables

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `age` variable is defined and has number value |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `name` variable is defined and has string value |

### HTML output

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | HTML output contains `age` and `name` values |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-boilerplate-JSX)


[//]: # (autograding info end)