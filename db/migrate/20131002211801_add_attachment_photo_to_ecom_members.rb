class AddAttachmentPhotoToEcomMembers < ActiveRecord::Migration
  def self.up
    change_table :ecom_members do |t|
      t.attachment :photo
    end
  end

  def self.down
    drop_attached_file :ecom_members, :photo
  end
end
