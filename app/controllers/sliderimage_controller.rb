class SliderimageController < ApplicationController
  before_filter :authenticate_admin!
  
  def index
    @sliderimages = Sliderimage.all
  end
  def new
    @slider_image = Sliderimage.new
  end
  def create
    @slider_image = Sliderimage.create(params[:sliderimage])

    redirect_to sliderimage_index_path
  end
  def edit
    @slider_image = Sliderimage.find(params[:id])
  end
  def update
    @slider_image = Sliderimage.find(params[:id])
    if @slider_image.update_attributes(params[:sliderimage])
      redirect_to sliderimage_index_path
    end
  end
  def destroy
    @slider_image = Sliderimage.find(params[:id])
    @slider_image.destroy

    redirect_to sliderimage_index_path
  end
end
