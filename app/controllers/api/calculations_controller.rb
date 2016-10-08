class Api::CalculationsController < ApplicationController
  def index
      @calculations = Calculation.all
  end

  def create
    @calculation = Calculation.new(calculations_params)
    @calculation.evaluateExpression
    if @calculation.save
        render :show
    else
      render json: @calculation.errors.full_messages, status: 422
    end
  end

  def show
    @calculations = Calculations.find(params[:id])
  end


  private

  def calculations_params
    params.require(:calculation).permit(:expression, :user_id)
  end
end
