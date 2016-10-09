class Calculation < ApplicationRecord
  belongs_to :user

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
end
