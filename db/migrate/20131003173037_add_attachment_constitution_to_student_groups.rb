class AddAttachmentConstitutionToStudentGroups < ActiveRecord::Migration
  def self.up
    change_table :student_groups do |t|
      t.attachment :constitution
    end
  end

  def self.down
    drop_attached_file :student_groups, :constitution
  end
end
