class SenateMinutes < ActiveRecord::Base
  attr_accessible :date, :summary, :document, :filename
  has_attached_file :document
end
