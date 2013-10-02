class SliderimageController < ApplicationController
  def index
  end
  def new
    @slider_image = Sliderimage.new
  end
  def create
    @slider_image = Sliderimage.create(params[:sliderimage])
  end
  def edit
    @sliderimage = Sliderimage.find(params[:id])
  end
end
