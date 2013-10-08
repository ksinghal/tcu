class AddFilenameToSenateMinutes < ActiveRecord::Migration
  def change
    add_column :senate_minutes, :filename, :string
  end
end
