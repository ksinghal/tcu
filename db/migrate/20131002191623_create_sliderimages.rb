class CreateSliderimages < ActiveRecord::Migration
  def change
    create_table :sliderimages do |t|
      t.string :link

      t.timestamps
    end
  end
end
