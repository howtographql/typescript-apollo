import { objectType, extendType, nonNull, intArg } from "nexus";
import { User } from "@prisma/client";

export const Vote = objectType({
    name: "Vote",
    definition(t) {
        t.nonNull.field("link", { type: "Link" });
        t.nonNull.field("user", { type: "User" });
    },
});

export const VoteMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.field("vote", {
            type: "Vote",
            args: {
                linkId: nonNull(intArg()),
            },
            async resolve(parent, args, context) {
                const { userId } = context;
                const { linkId } = args;

                if (!userId) {
                    throw new Error("Cannot vote without logging in.");
                }

                const link = await context.prisma.link.update({
                    where: {
                        id: linkId,
                    },
                    data: {
                        voters: {
                            connect: {
                                id: userId,
                            },
                        },
                    },
                });

                const user = await context.prisma.user.findUnique({
                    where: { id: userId },
                });

                return {
                    link,
                    user: user as User,
                };
            },
        });
    },
});
