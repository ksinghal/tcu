class CreateSenateMinutes < ActiveRecord::Migration
  def change
    create_table :senate_minutes do |t|
      t.string :date
      t.text :summary

      t.timestamps
    end
  end
end
