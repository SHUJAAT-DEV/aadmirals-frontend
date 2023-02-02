
function fetchLimitedContent(sanitizedContent) {

    let limitContent = "";

    limitContent = Array.from(sanitizedContent).slice(0, 60).join("");

    return limitContent;

  }

export default fetchLimitedContent;