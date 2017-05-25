class CreateFanoutSchedulers
  def initialize(note)
    @note = note
    @user = note.user
  end

  def run
    # TODO: slow query
    #   should be done with in_batches
    #   manually constructing the sql
    users = @user.followers
      .where(no_unreviewed_follower_notes(@user.id))
      .find_each do |user|
        unless @note.schedulers.create(user: user)
          logger.warn("Scheduler failed to create: #{scheduler.errors}")
        end
      end
  end

  private

  def no_unreviewed_follower_notes(user_id)
    <<-SQL
    NOT EXISTS(
      SELECT *
      FROM schedulers
      INNER JOIN notes
        ON schedulers.note_id = notes.id
      WHERE notes.user_id = #{user_id}
        AND schedulers.user_id = users.id
        AND schedulers.created_at = schedulers.updated_at
    )
    SQL
  end
end
