Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }
  root to: "pages#index"

  get "/all", to: "pages#index"
  get "/sign-in", to: "pages#index"
  get "/sign-up", to: "pages#index"
  
  resources :notes, only: [:index, :show, :create, :update, :destroy]
end
