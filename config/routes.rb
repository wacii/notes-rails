Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "sessions" }
  root to: "pages#index"

  get "/all", to: "pages#index"
  get "/sign-in", to: "pages#index"
  get "/sign-up", to: "pages#index"
  get "/profile/*other", to: "pages#index"

  resources :notes, only: [:index, :show, :create, :update, :destroy]
  resources :follows, only: [:create, :destroy] do
    collection do
      get :followers
      get :followed
    end
  end
  resources :profiles, only: [:show] do
    member do
      get :followers
      get :followed
    end
  end
end
