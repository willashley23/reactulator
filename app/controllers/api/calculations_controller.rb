class Api::CalculationsController < ApplicationController
  def index
      @calculations = Calculation.all
  end

  def create
    @calculations = Calculation.new(calculations_params)
    if @calculations.save
        render :show
    else
      render json: @calculations.errors.full_messages, status: 422
    end
  end

  def show
    @calculations = Calculations.find(params[:id])
  end


  private

  def calculations_params
    params.require(:calculations).permit(:expression, :user_id)
  end
end
