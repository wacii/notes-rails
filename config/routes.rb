Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }
  root to: "pages#index"

  get "/all", to: "pages#index"
  get "/sign-in", to: "pages#index"
  get "/sign-up", to: "pages#index"
  get "/profiles/*other", to: "pages#index"

  get "/notes/latest", to: "notes#latest"
  resources :users, only: :show, shallow: true do
    resources :notes, only: [:index, :show, :update, :destroy]
    member do
      get :followers, to: "users#followers"
      get :followed, to: "users#followed"
    end
  end
  resources :notes, only: :create
  resources :follows, only: [:create, :destroy]
end
