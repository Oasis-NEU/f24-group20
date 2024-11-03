from fuzzywuzzy import process

def match_name(input_name, name_list):
    """Returns the best match for the input name from a list of names."""
    best_match, score = process.extractOne(input_name, name_list)
    return best_match, score

if __name__ == "__main__":
    # Example usage
    names = ["Robert", "Elizabeth", "Michael", "Bob", "Liz"]
    print(match_name("Liz", names))  # Example input
