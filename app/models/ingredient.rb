class Ingredient < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :doses

  NAMES = Ingredient.all.map { |ingredient| ingredient.name }
end
