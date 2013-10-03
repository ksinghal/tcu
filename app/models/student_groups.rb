class StudentGroups < ActiveRecord::Base
  attr_accessible :account_number, :council, :budget, :constitution, :name
  has_attached_file :budget
  has_attached_file :constitution
end
