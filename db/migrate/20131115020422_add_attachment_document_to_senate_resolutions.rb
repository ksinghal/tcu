class AddAttachmentDocumentToSenateResolutions < ActiveRecord::Migration
  def self.up
    change_table :senate_resolutions do |t|
      t.attachment :document
    end
  end

  def self.down
    drop_attached_file :senate_resolutions, :document
  end
end
