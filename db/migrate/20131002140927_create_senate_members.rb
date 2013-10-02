class CreateSenateMembers < ActiveRecord::Migration
  def change
    create_table :senate_members do |t|
      t.string :name
      t.string :email
      t.string :graduation_year

      t.timestamps
    end
  end
end