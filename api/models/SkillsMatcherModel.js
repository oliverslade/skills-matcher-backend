var TaskSchema = new Schema(
    {
        name: {
            type: String,
        },
        skills: {
            java: {
                skillRating: Int,
                interestRating: Int
            },
            html: {
                skillRating: Int,
                interestRating: Int
            },
            javascript: {
                skillRating: Int,
                interestRating: Int
            },
            css: {
                skillRating: Int,
                interestRating: Int
            }
        }
    }
);
