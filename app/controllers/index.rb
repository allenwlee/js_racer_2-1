get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/sign_in' do
  @player1 = User.find_or_create_by_name(params[:player1])
  @player2 = User.find_or_create_by_name(params[:player2])
  @game = Game.create
  @game.users << @player1
  @game.users << @player2
  redirect "/play/#{@game.id}"
end

get '/play/:id' do
 @game = Game.find(params[:id])
 playerhash = {game: @game.id}.to_json
 erb :play
end

post '/play/:id/results' do
  puts "here"
  puts params
  @game = Game.find(params[:id])
  
  def winning_player
    if params[:winner] == "1"
      @player1 = @game.users[0]
    else
      @player2 = @game.users[1]
    end
  end
  @game.update_attributes(winner: winning_player)
  "yay!"
end
