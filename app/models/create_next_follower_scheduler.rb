class CreateNextFollowerScheduler
  JOIN_STR = "LEFT OUTER JOIN schedulers ON schedulers.note_id = notes.id"

  def initialize(followed, follower)
    @followed = followed
    @follower = follower
  end

  def run
    return if @followed == @follower
    next_note = @followed.notes
      .joins(JOIN_STR)
      .where(public: true)
      .where(schedulers: { user_id: [@follower.id, nil] })
      .where(schedulers: { id: nil })
      .first
    return unless next_note
    unless next_note.schedulers.create(user: @follower)
      logger.warn "Scheduler failed to create: #{scheduler.errors}"
    end
  end
end
