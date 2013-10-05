class Sliderimage < ActiveRecord::Base
  attr_accessible :link, :photo, :photo_file_name
  has_attached_file :photo, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>',
    large: '500x500>'
  }
end
