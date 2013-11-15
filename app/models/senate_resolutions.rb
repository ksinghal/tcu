class SenateResolutions < ActiveRecord::Base
  attr_accessible :date, :filename, :summary, :document
  has_attached_file :document
end
