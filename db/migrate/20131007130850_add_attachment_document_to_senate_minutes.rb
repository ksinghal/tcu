class AddAttachmentDocumentToSenateMinutes < ActiveRecord::Migration
  def self.up
    change_table :senate_minutes do |t|
      t.attachment :document
    end
  end

  def self.down
    drop_attached_file :senate_minutes, :document
  end
end
