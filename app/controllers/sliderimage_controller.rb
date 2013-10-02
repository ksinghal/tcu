class SliderimageController < ApplicationController
  before_filter :authenticate_admin!
  
  def index
  end
  def new
    @slider_image = Sliderimage.new
  end
  def create
    @slider_image = Sliderimage.create(params[:sliderimage])

    redirect_to root_url
  end
  def edit
    @sliderimage = Sliderimage.find(params[:id])
  end
  def destroy
    @sliderimage = Sliderimage.find(params[:id])
    @sliderimage.destroy

    redirect_to root_url
  end
end
