# Reactulator

Reactulator is a simple calculator meant to demonstrate the fundamental concepts of React and Redux. 

## Design

## Storing User Input

The calculator in the `calculation` component renders a calculator composed of rows of `<li>` with `onClick` handlers. When a number, operator, clear, or the equals sign is clicked, a click handler will fire which will in someway update the state of the component. 

The main idea is that the equation is slowly built up one click at a time. The `store` contains a slice of state for calculation, and the calculation contains a prop called `expression`. Each time a number is clicked, `addNumberToCalculation` is fired, and `expression` is updated. Because the component is `connected` using Redux, the view automatically updates to reflect the added number. The same holds true for operators. 

Once the equals sign clicked, the store dispatches the createNewCalculation action, running the necessairy APIs through the middleware. 

## Evaluating The Calculation

Evaluation of the user's calculation is done at the model level. Since the `expression` is a stirng, once the string is recorded in the database, `calculation.rb` uses Regexp to parse the left hand side, operator, and right hand side of the expression. A switch statement is run, strings are converted to ints, and the calculation is made. Since we are still in the model, we can just concat "= #{answer}" to the expression.

```
 def evaluateExpression
    lhs = self.expression.match(/^[-]?\d*/)[0].to_i
    operator = self.expression.match(/[+-\/\*]/)[0]
    rhs =  self.expression.match(/\d*$/)[0].to_i
    case operator
      when "*"
        ans = lhs * rhs

      when "/"
        ans = lhs / rhs.to_f

      when "+"
        ans = lhs + rhs

      when "-"
        ans = lhs - rhs

      else 
        ans = " = 0"
    end
    self.expression += " = #{ans}"
  end
  ```

## Why No Array?

It may seem tempting to avoid fussing over regex and just store the expression as a single array with three buckets: one for the lhs, operator, and rhs, and then simply add another bucket for the answer in the model. But this would require its own brand of tedious logic in the component, and would require many back and forth conversions from string to int. Not good for readability. 
 