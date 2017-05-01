import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

const msInDay = 1000 * 60 * 60 * 24;

function dateToDays(dateObj) {
  const now = Date.now();
  const date = dateObj.getTime();

  if (date < now)
    return "Now"

  const days = Math.round((date - now) / (msInDay));
  return (days === 1 ? "1 Day" : `${days} Days`);
}

function NoteItem({ note }) {
  return (
    <tr>
      <td>{note.text}</td>
      <td>
        <Link to="#">You</Link>
      </td>
      <td>{dateToDays(note.review_after)}</td>
    </tr>
  );
}

class NoteList extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, loading, error } = this.props;

    if (loading)
      return (
        <p>Loading...</p>
      );

    const noteItems = notes.map(note => (
      <NoteItem
        key={note.id}
        note={note} />
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Note</th>
            <th>From</th>
            <th>Due</th>
          </tr>
        </thead>

        <tbody>
          {noteItems}
        </tbody>
      </table>
    );
  }
}

NoteList.propTypes = {
  fetch: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default NoteList;
