class AddAttachmentBudgetToStudentGroups < ActiveRecord::Migration
  def self.up
    change_table :student_groups do |t|
      t.attachment :budget
    end
  end

  def self.down
    drop_attached_file :student_groups, :budget
  end
end
