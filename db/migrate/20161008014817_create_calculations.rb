class CreateCalculations < ActiveRecord::Migration[5.0]
  def change
    create_table :calculations do |t|
      t.string :expression
      t.integer :user_id
      t.timestamps
    end
  end
end
