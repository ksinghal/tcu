class HomeController < ApplicationController
  def index
    @slider_images = Sliderimage.all
  end
end
