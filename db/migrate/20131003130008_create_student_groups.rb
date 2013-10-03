class CreateStudentGroups < ActiveRecord::Migration
  def change
    create_table :student_groups do |t|
      t.integer :council
      t.string :name
      t.integer :account_number

      t.timestamps
    end
  end
end
