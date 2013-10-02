class SenateMembers < ActiveRecord::Base
  attr_accessible :email, :graduation_year, :name, :profile_image

  has_attached_file :profile_image, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>',
    large: '500x500>'
  }, :default_url => "/no-profile-img.jpg"
end
