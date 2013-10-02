class AddAttachmentPhotoToTreasuryMembers < ActiveRecord::Migration
  def self.up
    change_table :treasury_members do |t|
      t.attachment :photo
    end
  end

  def self.down
    drop_attached_file :treasury_members, :photo
  end
end
