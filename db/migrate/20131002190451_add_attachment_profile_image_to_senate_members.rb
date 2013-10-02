class AddAttachmentProfileImageToSenateMembers < ActiveRecord::Migration
  def self.up
    change_table :senate_members do |t|
      t.attachment :profile_image
    end
  end

  def self.down
    drop_attached_file :senate_members, :profile_image
  end
end
