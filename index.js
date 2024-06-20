// Function for Saturday fun with a default activity
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function for Monday work with a default activity
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function that returns a function to create an encouraging message
  function wrapAdjective(flair = '*') {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage for wrapAdjective
  const encouragingPromptFunction = wrapAdjective("%");
  console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are %a dedicated programmer%!
  
  // Additional usage examples
  console.log(saturdayFun("relax")); // Output: "This Saturday, I'm going to relax!"
  console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."
  
  // You can also change the flair for wrapAdjective
  const positiveAdjective = wrapAdjective("!!");
  console.log(positiveAdjective("awesome")); // Output: "You are !!awesome!!!"
  