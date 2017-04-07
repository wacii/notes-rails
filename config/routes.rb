Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }
  root to: "pages#index"
  resources :notes, only: [:index, :show, :create, :update, :destroy]
end
