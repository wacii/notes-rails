Rails.application.routes.draw do
  devise_for :users
  root to: "pages#index"
  resources :notes, only: [:index, :show, :create, :update, :destroy]
end
