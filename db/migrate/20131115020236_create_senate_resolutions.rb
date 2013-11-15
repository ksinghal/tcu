class CreateSenateResolutions < ActiveRecord::Migration
  def change
    create_table :senate_resolutions do |t|
      t.string :date
      t.string :summary
      t.string :filename

      t.timestamps
    end
  end
end
