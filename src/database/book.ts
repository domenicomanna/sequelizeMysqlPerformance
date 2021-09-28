import { Model, DataTypes } from "sequelize";

export class Book extends Model {
    id!: number;
    goodreadsBookId!: number;
    bestBookId!: number;
    workId!: number;
    booksCount!: number;
    isbn!: string;
    isbn13!: string;
    authors!: string;
    publicationYear!: string;
    originalTitle!: string;
    title!: string;
    languageCode!: string;
    averageRating!: number;
    ratingsCount!: number;
    workRatingsCount!: number;
    workTextReviewsCount!: number;
    ratings1!: number;
    ratings2!: number;
    ratings3!: number;
    ratings4!: number;
    ratings5!: number;
    imageUrl!: string;
    smallImageUrl!: string;

    static definition = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        goodreadsBookId: {
            type: DataTypes.INTEGER
        },
        bestBookId: {
            type: DataTypes.INTEGER
        },
        workId: {
            type: DataTypes.INTEGER
        },
        booksCount: {
            type: DataTypes.INTEGER
        },
        isbn: {
            type: DataTypes.TEXT
        },
        isbn13: {
            type: DataTypes.TEXT
        },
        authors: {
            type: DataTypes.TEXT
        },
        publicationYear: {
            type: DataTypes.TEXT
        },
        originalTitle: {
            type: DataTypes.TEXT
        },
        title: {
            type: DataTypes.TEXT
        },
        languageCode: {
            type: DataTypes.TEXT
        },
        averageRating: {
            type: DataTypes.DOUBLE
        },
        ratingsCount: {
            type: DataTypes.INTEGER
        },
        workRatingsCount: {
            type: DataTypes.INTEGER
        },
        workTextReviewsCount: {
            type: DataTypes.INTEGER
        },
        ratings1: {
            type: DataTypes.INTEGER
        },
        ratings2: {
            type: DataTypes.INTEGER
        },
        ratings3: {
            type: DataTypes.INTEGER
        },
        ratings4: {
            type: DataTypes.INTEGER
        },
        ratings5: {
            type: DataTypes.INTEGER
        },
        imageUrl: {
            type: DataTypes.TEXT
        },
        smallImageUrl: {
            type: DataTypes.TEXT
        }
    }
}