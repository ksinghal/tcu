class AddAttachmentPhotoToSliderimages < ActiveRecord::Migration
  def self.up
    change_table :sliderimages do |t|
      t.attachment :photo
    end
  end

  def self.down
    drop_attached_file :sliderimages, :photo
  end
end
